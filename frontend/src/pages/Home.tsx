import Input from '@components/common/Input';
import Layout from '@components/common/Layout';
import DukpoolArticles from '@components/home/DukpoolArticles';
import DukpoolTalks from '@components/home/DukpoolTalks';

const Home = () => {
  return (
    <Layout>
      <Input />
      <DukpoolArticles />
      <DukpoolTalks />
    </Layout>
  );
};

export default Home;
