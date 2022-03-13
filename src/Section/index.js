import "./style.css";

const Section = ({title, header, body}) => (
    <section className="section">
        <div className="section__container">
          <h2 className="section__header section__header--offborder">{title}</h2>
            {header}
        </div>
        <div className="section__body">
          {body}
        </div>
      </section>
);

export {Section};