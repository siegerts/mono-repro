import { GetServerSideProps } from 'next';

interface HomeProps {
  locale: string;
}

const Home = ({ locale }: HomeProps): JSX.Element => {
  return (
    <div>
      <h1>{locale}</h1>
      <p>Monorepo reproduction</p>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<HomeProps> = async (ctx) => {
  return {
    props: {
      locale: ctx.locale,
    },
  };
};
export default Home;
