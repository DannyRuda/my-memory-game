import "./popup.scss";

interface PopupProps {
  children: React.ReactNode;
}

function Popup(props: PopupProps) {
  return (
    <>
      <div className="popup bg-slate-900"></div>
      <div className={`content bg-slate-800 `}>{props.children}</div>
    </>
  );
}

export { Popup };
