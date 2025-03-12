
import { useState, useEffect } from 'react';

interface QRCodeProps {
  url: string;
  size?: number;
  title?: string;
  useCustomImage?: boolean;
  customImagePath?: string;
}

const QRCode = ({ url, size = 180, title, useCustomImage = false, customImagePath }: QRCodeProps) => {
  const [qrCodeSrc, setQrCodeSrc] = useState('');

  useEffect(() => {
    if (useCustomImage && customImagePath) {
      setQrCodeSrc(customImagePath);
    } else {
      // Generate QR code using a free API
      const encodedUrl = encodeURIComponent(url);
      setQrCodeSrc(`https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodedUrl}`);
    }
  }, [url, size, useCustomImage, customImagePath]);

  return (
    <div className="flex flex-col items-center animate-fade-in-up">
      {title && <h3 className="text-xl font-medium mb-4 text-center">{title}</h3>}
    </div>
  );
};

export default QRCode;
