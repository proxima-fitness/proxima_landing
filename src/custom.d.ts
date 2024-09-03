
// declare module "*.svg" {
//     const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
//     export default content;
//   }
declare module "*.svg" {
  // This type should represent the source of the SVG file as a string
  const content: string;
  export default content;
}
  declare module "*.png" {
    const content: string;
    export default content;
}

