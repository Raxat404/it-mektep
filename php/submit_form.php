<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $fullname = $_POST['fullname'];
    $phone = $_POST['phone'];

    // Compose email message
    $to = "admin@example.com";
    $subject = "New Signup";
    $message = "Name: $fullname\nPhone: $phone";
    $headers = "From: webmaster@example.com";

    // Send email
    if (mail($to, $subject, $message, $headers)) {
        $response = array("status" => "success", "message" => "Form submitted successfully!");
        echo json_encode($response);
    } else {
        $response = array("status" => "error", "message" => "Failed to submit form.");
        echo json_encode($response);
    }
}
?>