import { ReactNode } from "react";
import "./index.scss";
import { X,  } from 'lucide-react';

interface IProps {
  type:string,
  icon: ReactNode,
  title:string,
  description:string,
}
function Alert({type="alert-succes",icon,title,description}: IProps) {
  return (
    <section className={type}>
      <div className="alert-header">
        <div className="title">
          <span>{icon}</span>
          <h4>{title}</h4>
        </div>
          <X className="close" size={23}/>
      </div>
      <p>{description}</p>
    </section>
  );
}

export default Alert;
