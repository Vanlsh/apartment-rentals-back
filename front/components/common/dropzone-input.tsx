import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { CloudUpload, X } from 'lucide-react';
import Dropzone from 'react-dropzone';
import Picture from '@/components/common/picture';

export const DropzoneUploadedImage = ({
  src,
  width,
  height,
  alt,
  imageClassName,
  wrapperClassName,
  onChange,
}: {
  src: string;
  width?: number;
  height?: number;
  alt: string;
  imageClassName?: string;
  wrapperClassName?: string;
  onChange: (value: null) => void;
}) => {
  return (
    <div
      className={cn(
        'relative flex h-64 justify-center overflow-hidden rounded-md border border-dashed border-primary',
        wrapperClassName,
      )}
    >
      <Picture
        sources={[
          {
            srcSet: src,
          },
        ]}
        src={src}
        alt={alt}
        className={cn(imageClassName)}
        width={width}
        height={height}
      />
      <Button
        type="button"
        className="absolute right-4 top-4 size-8"
        size="icon"
        onClick={() => onChange(null)}
      >
        <X />
      </Button>
    </div>
  );
};

export const DropzoneContent = ({
  acceptedFormats,
}: {
  acceptedFormats?: string[];
}) => {
  return (
    <div className="flex flex-col items-center justify-center px-5 pb-6 pt-5">
      <CloudUpload className="mb-1" size={40} />
      <p className="mb-2 text-center text-sm">
        <span className="font-semibold">Click to upload</span> or drag and drop
        a file here
      </p>
      {acceptedFormats && (
        <p className="text-xs">
          Supported image formats: {acceptedFormats.join(', ')}
        </p>
      )}
    </div>
  );
};

interface IDropzoneInputProps {
  accept?: { [key: string]: string[] };
  className?: string;
  children?: React.ReactNode;
  onChange: (value: File) => void;
}

const DropzoneInput = ({
  accept,
  className,
  children,
  onChange,
}: IDropzoneInputProps) => {
  return (
    <Dropzone
      accept={accept}
      onDrop={acceptedFiles => onChange(acceptedFiles[0])}
    >
      {({ getRootProps, getInputProps }) => (
        <div
          {...getRootProps({
            className: cn(
              'flex flex-col items-center hover:bg-primary/5 border-primary justify-center duration-300 border border-dashed w-full rounded-lg cursor-pointer',
              className,
            ),
          })}
        >
          <input {...getInputProps()} />
          {children ?? <DropzoneContent />}
        </div>
      )}
    </Dropzone>
  );
};

export default DropzoneInput;
