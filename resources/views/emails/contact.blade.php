<!DOCTYPE html>
<html>
<body style="font-family: sans-serif; background: #f0f5ff; padding: 24px;">
    <div style="max-width: 480px; margin: 0 auto; background: white; border-radius: 12px; padding: 32px; border: 1px solid #e2e8f0;">
        <p style="font-size: 12px; color: #2563eb; font-weight: bold; text-transform: uppercase; letter-spacing: 1px;">New Message</p>
        <h2 style="color: #080f1e; margin-top: 8px;">{{ $senderName }}</h2>
        <p style="color: #4a5568; font-size: 14px;">{{ $senderEmail }}</p>
        <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;">
        <p style="color: #080f1e; line-height: 1.6; white-space: pre-wrap;">{{ $messageBody }}</p>
        <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;">
        <p style="font-size: 12px; color: #94a3b8;">Reply directly to this email to respond to {{ $senderName }}.</p>
    </div>
</body>
</html>