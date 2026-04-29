export default function SoftBackdrop() {
  return (
    <div className="fixed inset-0 -z-1 pointer-events-none">
      <div className="absolute left-1/2 top-20 -translate-x-1/2 w-[980px] h-full lg:h-[460px] bg-linear-to-tr from-violet-800/40 to-transparent rounded-full blur-3xl" />
    </div>
  );
}
