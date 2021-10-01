import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useSnackbar } from 'notistack';
import { useHistory } from 'react-router';

import { STATUS_CODES } from '../../constants/statusCodes/StatusCodes';
import { Routes } from '../../constants/routes';

import { StyledCard, RowWithWrap } from '../../utils/style/styledComponents';
import { Breadcrumbs } from '../../components/breadcrumbs/Breadcrumbs';
import { Headline } from '../../components/typography/Headlines';
import { Separator } from '../../components/common/Separator';
import { Spacer } from '../../components/common/Spacer';
import { useStore } from '../../hooks/useStore';

const AdminProblemsScreen = () => {
  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();
  const {
    problemsStore: { problems, getProblems },
  } = useStore();

  useEffect(() => {
    (async () => {
      const { status } = await getProblems();
      if (status !== STATUS_CODES.success) enqueueSnackbar('Could not fetch problems!', { variant: 'error' });
    })();
  }, []);

  return (
    <>
      <Breadcrumbs mainSection={'Dashboard'} crumbs={['Problems']} />
      <Headline>Codewaves Problems</Headline>
      <Separator />
      <Spacer height={32} />
      <RowWithWrap>
        {problems.map(p => (
          <StyledCard
            onClick={() => {
              history.push(`${Routes.AdminEditProblem}/${p._id!}`);
            }}
          >
            {p.name}
          </StyledCard>
        ))}
      </RowWithWrap>
    </>
  );
};

export default observer(AdminProblemsScreen);
