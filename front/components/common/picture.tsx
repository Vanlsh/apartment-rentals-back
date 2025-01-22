import { cn } from '@/lib/utils';
import { StaticImageData } from 'next/image';

type PictureSource = {
  srcSet: string | StaticImageData;
  media?: string;
  type?: string;
};

type PictureProps = {
  sources?: PictureSource[];
  src: string | StaticImageData;
  alt: string;
  title?: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
};

const getMimeType = (url: string): string | undefined => {
  const extension = url.split('.').pop()?.toLowerCase();
  switch (extension) {
    case 'webp':
      return 'image/webp';
    case 'jpeg':
    case 'jpg':
      return 'image/jpeg';
    case 'png':
      return 'image/png';
    default:
      return undefined;
  }
};

const resolveSource = (source: string | StaticImageData): string =>
  typeof source === 'string' ? source : source.src;

const Picture = ({
  sources,
  src,
  title,
  alt,
  className,
  width,
  height,
  loading = 'eager',
}: PictureProps) => {
  return (
    <picture>
      {sources &&
        sources.map((source, index) => {
          const resolvedSourceSet = resolveSource(source.srcSet);
          return (
            <source
              key={index}
              srcSet={resolvedSourceSet}
              media={source.media}
              type={source.type || getMimeType(resolvedSourceSet)}
            />
          );
        })}
      <img
        title={title}
        src={resolveSource(src)}
        alt={alt}
        className={cn(className)}
        width={width}
        height={height}
        loading={loading}
      />
    </picture>
  );
};

export default Picture;
