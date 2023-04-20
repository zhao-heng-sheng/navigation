import { Layout, Space } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
export default function IndexPage() {
  return (
    <Layout>
      <Sider >Sider</Sider>
      <Layout>
        <Header >Header</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  );
}
