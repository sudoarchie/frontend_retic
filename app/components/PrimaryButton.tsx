interface button {
  Name: string;
  className?: string;
}
export function PrimaryButton({ Name, className }: button) {
  return (
    <button
      className={`align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-primary text-white shadow-md shadow-primary/10 hover:shadow-lg hover:shadow-primary/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none block ${className}`}
      type="button"
    >
      {Name}
    </button>
  );
}
