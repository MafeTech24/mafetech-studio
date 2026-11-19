export default function BrandMark() {
  return (
    <span className="inline-flex items-center gap-2">
      <span aria-hidden="true" className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-r from-[#6531c5] to-[#8832bc] text-sm font-bold text-white">
        MF
      </span>
      <span className="font-sans text-lg font-bold tracking-tight text-foreground">
        Mafe<span className="text-primary">Tech</span>
      </span>
    </span>
  );
}
