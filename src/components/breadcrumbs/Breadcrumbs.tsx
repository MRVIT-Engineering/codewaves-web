import styled from 'styled-components';

import { GreyParagraph } from '../common/Paragraph';

interface BreadcrumbsProps {
  mainSection: string;
  crumbs: string[];
}

const Colored = styled.span`
  color: var(--primary);
`;

export const Breadcrumbs = ({ crumbs, mainSection }: BreadcrumbsProps) => {
  return (
    <GreyParagraph>
      <Colored>{mainSection}</Colored> {crumbs.map(c => ' > ' + c)}
    </GreyParagraph>
  );
};
