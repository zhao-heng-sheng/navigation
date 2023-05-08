import { Layout, Space } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
export default function IndexPage() {
  return (
    <Layout>
      <Sider>
        <div>天气</div>
        <div>列表</div>
      </Sider>
      <Layout>
        <Header>
          <div>搜索框</div>
          <div>设置、其他功能项</div>
        </Header>
        <Content>
          <div>网站列表</div>
          <div>右上测待办事项</div>
        </Content>
        <Footer>
          <div>备案号</div>
        </Footer>
      </Layout>
    </Layout>
  );
}
