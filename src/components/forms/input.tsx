import style from "@/components/forms/input.module.css";

type InputProps = React.ComponentProps<"input"> & {
  label: string;
  error?: string;
};

export default function Input({ label, error, ...props }: InputProps) {
  return (
    <div className={style.wrapper}>
      <label className={style.label} htmlFor={props.name}>
        {label}
      </label>
      <input className={style.input} id={props.name} {...props} />
      {error && <p>{error}</p>}
    </div>
  );
}
