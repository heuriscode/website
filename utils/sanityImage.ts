import imageUrlBuilder from '@sanity/image-url';
import client from '@/client';
import { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder';

interface ImageProps extends Omit<React.HTMLProps<HTMLImageElement>, 'src'> {
  src: string | ImageUrlBuilder;
}
export function urlFor(source: ImageProps) {
  return imageUrlBuilder(client).image(source);
}
