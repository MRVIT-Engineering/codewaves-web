interface DeviconProps {
  icon: string;
  // color: string;
  size?: number;
}

export const Devicon = ({ icon, size }: DeviconProps) => {
  return <i className={icon} style={{ fontSize: size + 'px' }} />;
};
