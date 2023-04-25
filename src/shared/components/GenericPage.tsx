import { Typography } from 'antd';

type GenericPageProps = {
  title: string;
};

function GenericPage({ title = '' }: GenericPageProps) {
  const { Title } = Typography;
  return <Title level={2}>{title}</Title>;
}

export default GenericPage;
