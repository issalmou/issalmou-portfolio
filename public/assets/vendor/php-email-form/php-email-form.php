<?php
/**
 * PHP Email Form Class
 * A simple class to send contact form messages
 * Supports both mail() and SMTP
 */

class PHP_Email_Form {
    public $to;
    public $from_name;
    public $from_email;
    public $subject;
    public $ajax = false;
    public $smtp = array();
    private $messages = array();    
    public function add_message($content, $label = '', $length = 0) {
        $this->messages[] = array(
            'content' => $content,
            'label'   => $label,
            'length'  => $length
        );
        return true;
    }   
    public function send() {
        $msg = "";
        foreach ($this->messages as $m) {
            $msg .= ($m['label'] ? $m['label'] . ": " : "") . $m['content'] . "\n";
        } 
        $headers = "From: " . $this->from_name . " <" . $this->from_email . ">\r\n";
        $headers .= "Reply-To: " . $this->from_email . "\r\n";    
        // If SMTP is set, use it
        if (!empty($this->smtp)) {
            return $this->send_smtp($msg);
        } else {
            return mail($this->to, $this->subject, $msg, $headers);
        }
    }   
    private function send_smtp($msg) {
        $host = $this->smtp['host'];
        $username = $this->smtp['username'];
        $password = $this->smtp['password'];
        $port = isset($this->smtp['port']) ? $this->smtp['port'] : 587;   
        // Use PHPMailer if installed
        if (!class_exists('PHPMailer\PHPMailer\PHPMailer')) {
            require_once __DIR__ . '/PHPMailer/PHPMailer.php';
            require_once __DIR__ . '/PHPMailer/SMTP.php';
            require_once __DIR__ . '/PHPMailer/Exception.php';
        } 
        $mail = new PHPMailer\PHPMailer\PHPMailer(true);  
        try {
            $mail->isSMTP();
            $mail->Host = $host;
            $mail->SMTPAuth = true;
            $mail->Username = $username;
            $mail->Password = $password;
            $mail->SMTPSecure = 'tls';
            $mail->Port = $port;    
            $mail->setFrom($this->from_email, $this->from_name);
            $mail->addAddress($this->to);
            $mail->Subject = $this->subject;
            $mail->Body = implode("\n", array_map(function($m){
                return ($m['label'] ? $m['label'] . ": " : "") . $m['content'];
            }, $this->messages));   
            $mail->send();
            return 'OK';
        }   catch (Exception $e) {
            return "Mailer Error: " . $mail->ErrorInfo;
        }
    }
}
?>
