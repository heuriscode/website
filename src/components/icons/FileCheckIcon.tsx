import { IconProps } from '@/utils/types';

export function FileCheckIcon({ className }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className={className}>
      {/* Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}
      <path
        fill="currentColor"
        d="M384 128h-128V0L384 128zM256 160H384v304c0 26.51-21.49 48-48 48h-288C21.49 512 0 490.5 0 464v-416C0 21.49 21.49 0 48 0H224l.0039 128C224 145.7 238.3 160 256 160zM245.8 264.4l-79.13 92.34l-29.69-29.69c-9.375-9.375-24.56-9.375-33.94 0s-9.375 24.56 0 33.94l48 48c4.5 4.5 10.62 7.031 16.97 7.031c.3125 0 .625 0 .9062-.0313c6.688-.25 12.97-3.281 17.31-8.344l96-112c8.625-10.06 7.469-25.22-2.594-33.84C269.6 253.2 254.4 254.3 245.8 264.4z"
      />
    </svg>
  );
}
