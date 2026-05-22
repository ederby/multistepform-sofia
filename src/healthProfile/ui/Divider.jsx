export default function Divider({ style = "" }) {
  return (
    <div
      className={`bg-gray-300 h-px w-full col-span-12 my-1.5 ${style}`}
    ></div>
  );
}
