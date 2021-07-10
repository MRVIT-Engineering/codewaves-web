import classes from '../../../assets/css/Homepage.module.css';
import html from '../../../assets/images/homepage/html-icon.svg';
import css from '../../../assets/images/homepage/css-icon.svg';
import js from '../../../assets/images/homepage/js-icon.svg';
import jquery from '../../../assets/images/homepage/jquery-vertical.svg';
import bootstrap from '../../../assets/images/homepage/bootstrap-logo.png';
import python from '../../../assets/images/homepage/python.png';
import cpp from '../../../assets/images/homepage/cpp.png';
import node from '../../../assets/images/homepage/node.png';

export default function CarouselLine() {
  return (
    <div className={classes.AnimatedLine}>
      <div className={classes.LineCard}>
        <img src={html} alt="HTML icon svg." />
      </div>
      <div className={classes.LineCard}>
        <img src={css} alt="CSS Icon svg." />
      </div>
      <div className={classes.LineCard}>
        <img src={js} alt="JS Icon svg." />
      </div>
      <div className={classes.LineCard}>
        <img src={jquery} alt="JQuery Icon svg." />
      </div>
      <div className={classes.LineCard}>
        <img src={bootstrap} alt="Bootstrap Icon svg." />
      </div>
      <div className={classes.LineCard}>
        <img src={python} alt="Python Icon svg." />
      </div>
      <div className={classes.LineCard}>
        <img src={cpp} alt="CPP Icon." />
      </div>
      <div className={classes.LineCard}>
        <img src={node} alt="Node Icon." />
      </div>
    </div>
  );
}
