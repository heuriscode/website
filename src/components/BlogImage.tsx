export function BlogImage(props) {
  return <img alt={props.alt} className="w-full h-auto rounded-lg" loading="lazy" {...props} />;
}
