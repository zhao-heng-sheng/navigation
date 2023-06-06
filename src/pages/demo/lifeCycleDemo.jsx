import React, { useEffect, useState } from 'react';
import './style.less';
export const listData = {
  code: 0,
  message: 'success',
  list: [
    {
      id: '1',
      giftName:
        '约斯夫家庭校园多功能创可贴卡通女少女可爱超弹防水透气弹力小面积开放性创伤创口贴 超弹防水透气型 100贴/盒',
      giftImage:
        'https://img14.360buyimg.com/n1/jfs/t1/117043/23/16493/438028/5f50a682E96819e0d/a3678e5c4fb5a3cf.jpg',
      price: '19.90',
    },
    {
      id: '2',
      giftName:
        '【MaincareBio】医用外科口罩一次性无菌三层透气成人挂耳式防细菌病毒飞沫防护医用口罩 儿童医用外科口罩50只【10只/包*5包】',
      giftImage:
        'https://img14.360buyimg.com/n1/jfs/t1/133614/39/16312/128620/5fb3a1b8E02fec0c6/0b7d82a132932f35.jpg',
      price: '39.90',
    },
    {
      id: '3',
      giftName:
        '乐樊一次性医用外科口罩医生专用成人通用三层医疗口罩透气单片防护 医用外科口罩100只蓝色【非独立包装/2包】',
      giftImage:
        'https://img14.360buyimg.com/n1/jfs/t1/151889/33/15018/129441/6008e066Ee813ef0d/1f1a8218fa30a05f.jpg',
      price: '31.90',
    },
    {
      id: '4',
      giftName:
        '俏东方 一次性医用口罩白色 轻薄透气 三层防护含熔喷过滤成人男女适用冬季防护面罩 50只医用口罩白色整包(工厂特惠)',
      giftImage:
        'https://img14.360buyimg.com/n1/jfs/t1/164271/11/7365/212791/6032be25E162107e3/df794675c5095edf.jpg',
      price: '9.90',
    },
    {
      id: '5',
      giftName:
        '【7仓隔日达】咔贝爱(KABEIAI)一次性医用防护口罩防尘防雾霾防颗粒物 三层防护透气医用口罩 医用口罩50只（1包）',
      giftImage:
        'https://img14.360buyimg.com/n1/jfs/t1/156216/4/9112/168310/601e5d2aE4ad9ee3b/65a25f358d136a20.jpg',
      price: '19.90',
    },
    {
      id: '6',
      giftName:
        '康诺嘉口罩KN95一次性口罩5层防护日常防雾霾灰尘通用型男女口罩 50只',
      giftImage:
        'https://img14.360buyimg.com/n1/jfs/t1/161195/25/1659/131874/5ff7d289E597c8999/700182369a7bed58.jpg',
      price: '26.90',
    },
    {
      id: '7',
      giftName:
        '拓家中药泡脚包艾草红花草益母草老姜当归泡脚包缓解疲劳泡脚粉 30小包/袋 随机发货 3袋(90包)',
      giftImage:
        'https://img14.360buyimg.com/n1/jfs/t1/168773/15/1476/92527/5ff6d15fE46e9b990/98acc32416799ab9.jpg',
      price: '29.90',
    },
    {
      id: '8',
      giftName:
        '多美忆 2021新年装饰品窗贴春节装饰窗花牛年福字贴纸贴画家用室内商场店铺场景布置 春节窗贴（新年快乐）',
      giftImage:
        'https://img14.360buyimg.com/n1/jfs/t1/165342/17/1238/201103/5ff58107E7b42ee87/aab515ec5cb209b3.jpg',
      price: '7.90',
    },
    {
      id: '9',
      giftName:
        '南极人【5双装】保暖袜子男加厚款秋冬季毛圈袜纯色长袜中筒毛巾袜棉袜男 加厚毛圈袜5色5双',
      giftImage:
        'https://img14.360buyimg.com/n1/jfs/t1/100815/34/3889/179336/5de36360E458679a3/af803962c81a6939.jpg',
      price: '12.90',
    },
  ],
  pageCount: 2,
  page: 1,
};
export function debounce(fn, time) {
    let timer = null;
    return function(...arg) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(this, arg);
      }, time);
    };
}
/* item 完全是单元项的渲染ui */
function Item({ item }) {
  return (
    <div className="goods_item">
      <img src={item.giftImage} className="item_image" />
      <div className="item_content">
        <div className="goods_name">{item.giftName}</div>
        <div className="hold_price" />
        <div className="new_price">
          <div className="new_price">
            <div className="one view">¥ {item.price}</div>
          </div>
        </div>
        <img className="go_share  go_text" />
      </div>
    </div>
  );
}
const fetchData = (page) => {
  return new Promise((resolve) => {
    resolve({
      ...listData,
      page,
      list: listData.list.slice(5 * (page - 1), 5 * page),
    });
  });
};

export default () => {
  const [data, setData] = useState({
    list: [],
    page: 0,
    pageCount: 1,
  }); /* 记录列表数据 */
  /* 请求数据 */
  const getData = async () => {
    if (data.page === data.pageCount) return console.log('没有数据了～');
    const res = await fetchData(data.page + 1);
    if (res.code === 0)
      setData({
        ...res,
        list: res.page === 1 ? res.list : data.list.concat(res.list),
      });
  };
  /* 滚动到底部触发 */
  const handerScrolltolower = () => {
    console.log('scroll已经到底部');
    getData();
  };
  /* 初始化请求数据 */
  useEffect(() => {
    getData();
  }, []);
  return (
    <ScrollView
      data={data} /*  */
      component={Item} /* Item 渲染的单元组件 */
      scrolltolower={handerScrolltolower}
      scroll={() => {}}
    />
  );
};

class ScrollView extends React.Component {
  /* -----自定义事件---- */
  /* 控制滚动条滚动 */
  handerScroll = (e) => {
    const { scroll } = this.props;
    scroll && scroll(e);
    this.handerScrolltolower();
  };
  /* 判断滚动条是否到底部 */
  handerScrolltolower() {
    const { scrolltolower } = this.props;
    const { scrollHeight, scrollTop, offsetHeight } = this.node;
    if (scrollHeight === scrollTop + offsetHeight) {
      /* 到达容器底部位置 */
      scrolltolower && scrolltolower();
    }
  }
  node = null;

  /* ---——---生命周期------- */
  constructor(props) {
    super(props);
    this.state = {
      /* 初始化 Data */ list: [],
    };
    this.handerScrolltolower = debounce(
      this.handerScrolltolower,
      200,
    ); /* 防抖处理 */
  }
  /* 接收props, 合并到state */
  static getDerivedStateFromProps(newProps) {
    const { data } = newProps;
    return {
      list: data.list || [],
    };
  }
  /* 性能优化，只有列表数据变化，渲染列表 */
  shouldComponentUpdate(newProps, newState) {
    return newState.list !== this.state.list;
  }
  /* 获取更新前容器高度 */
  getSnapshotBeforeUpdate() {
    return this.node.scrollHeight;
  }
  /* 获取更新后容器高度 */
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('scrollView容器高度变化:', this.node.scrollHeight - snapshot);
  }
  /* 绑定事件监听器 - 监听scorll事件 */
  componentDidMount() {
    this.node.addEventListener('scroll', this.handerScroll);
  }
  /* 解绑事件监听器 */
  componentWillUnmount() {
    this.node.removeEventListener('scroll', this.handerScroll);
  }
  render() {
    const { list } = this.state;
    const { component } = this.props;
    return (
      <div className="list_box" ref={(node) => (this.node = node)}>
        <div>
          {list.map(
            (item) => React.createElement(component, { item, key: item.id }), //渲染 Item 列表内容。
          )}
        </div>
      </div>
    );
  }
}
