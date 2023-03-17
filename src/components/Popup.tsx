import "./popup.scss";

function Popup(props: Object) {
  return (<><div className="popup bg-slate-900">

  </div>
  <div className="content bg-slate-800">{props.children}</div></>
    
  );
}

export { Popup };
