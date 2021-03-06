import React from 'react';
import Helmet from 'react-helmet';

module.exports = React.createClass({
  getInitialState() {
    return null;
  },
  componentDidMount() {
  },
  render() {
    if(chrome.i18n.getUILanguage().indexOf('zh') != -1) {
      return (
        <div id="about">
          <Helmet
            title="About"
          />
          <div className="section" id="top">
			<h3>二管家</h3>
			<a onClick={CL.bind(null,'https://ainoob.com/project/nooboss','About-link','link')}><img id="icon1" className="spinRight" src="/images/icon_128.png" /></a>
			<a onClick={CL.bind(null,'https://ainoob.com/project/noobox','About-link','link')}><img id="icon2" className="spinLeft" src="/images/icon_2.png" /></a>
		  </div>
		  <section className="section">
            <h5>分享二管家</h5>
            <p>你喜欢二管家吗？如果觉得还不错，那就考虑一下分享二管家吧~</p>
			<a className="shareItem" target="_blank" href="http://www.jiathis.com/send/?webid=tsina&url=https://ainoob.com/project/nooboss&title=NooBoss"><img className="shareIcon" src="thirdParty/sina.png" /></a>
            <a className="shareItem" target="_blank" href="http://www.jiathis.com/send/?webid=weixin&url=https://ainoob.com/project/nooboss&title=NooBoss"><img className="shareIcon" src="thirdParty/wechat.png" /></a>
            <a className="shareItem" target="_blank" href="http://www.jiathis.com/send/?webid=renren&url=https://ainoob.com/project/nooboss&title=NooBoss"><img className="shareIcon" src="thirdParty/renren.png" /></a>
            <a className="shareItem" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A//ainoob.com/project/nooboss"><img className="shareIcon" src="thirdParty/facebook.png" /></a>
            <a className="shareItem" target="_blank" href="https://plus.google.com/share?url=https%3A//ainoob.com/project/nooboss"><img className="shareIcon" src="thirdParty/google.png" /></a>
            <a className="shareItem" target="_blank" href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A//ainoob.com/project/nooboss&title=NooBoss%20---%20A%20ultimate%20extension%20for%20Chrome%20extensions%%20managing&summary=&source="><img className="shareIcon" src="thirdParty/linkedin.png" /></a>
            <a className="shareItem" target="_blank" href="https://twitter.com/home?status=https%3A//ainoob.com/project/nooboss"><img className="shareIcon" src="thirdParty/twitter.png" /></a>
          </section>
               <section className="section">
               <h5>二管家能干什么？</h5>
               <p>目前，二管家可以 (应用/拓展/主题 在下面都会叫应用)</p>
               <ul>
                      <li>
                             管理你的应用
                             <ul>
                                    <li>开启/关闭/删除一个或多个应用</li>
                             </ul>
                      </li>
                      <li>
                             社区分享
                             <ul>
                                <li>根据当前网页看到二管家社区推荐的适用于当前网页的拓展</li>
                                    <li>每个人都可以给任何一个网站推荐好的拓展</li>
                                    <li>每个人都可以给任何一个拓展打标签</li>
                             </ul>
                      </li>
                      <li>
                             自动应用状态管理
                             <ul>
                                    <li>
                                       根据设置的规则自动启用或禁用应用
                                       <ul>
                                              <li>(减少内存占用)</li>
                                              <li>(只有在需要的时候才开启应用)</li>
                                       </ul>
                                    </li>
                             </ul>
                      </li>
                      <li>
                             应用历史记录
                             <ul>
                                    <li>记录应用的安装，卸载，开启，和关闭</li>
                                    <li>
                                       可以知道版本变化
                                    </li>
                             </ul>
                      </li>
                      <li>
                             显示应用详细信息
                             <ul>
                                    <li>下载crx文件</li>
                                    <li>打开manifest文件</li>
                                    <li>查看权限</li>
                                    <li>和各种各样的详细信息</li>
                             </ul>
                      </li>
               </ul>
               <p>如果你有各种关于二管家使用方面的问题，你可以在这里查看使用介绍: <a onClick={CL.bind(null,'https://ainoob.com/project/nooboss','About-link','link')}>二管家项目</a></p>
            </section>
            <section className="section">
               <h5>谁弄的二管家</h5>
               <p>二管家是一个<a onClick={CL.bind(null,'https://ainoob.com','About-link','link')}>AInoob</a>写的开源的项目(GPL-V3)。你可以在<a onClick={CL.bind(null,'https://ainoob.com/project/nooboss','About-link','link')}>这里</a>查看二管家的进展</p>
            </section>
            <section className="section">
               <h5>隐私？</h5>
               <p>二管家是一个傲娇的软件，不会偷取你的隐私信息，也绝对不会出现广告。</p>
               <p>二管家会把你使用二管家的情况发给AInoob，这样他就知道有人喜欢这个软件，然后继续努力开发免费的二管家~</p>
            </section>
            <section className="section">
               <h5>怎么支持二管家？</h5>
               <p>二管家是免费开源的，AInoob不需要大家的捐钱或者任何资助，心意我领了~~~如果真的很喜欢的话，求在<a onClick={CL.bind(null, 'https://chrome.google.com/webstore/detail/aajodjghehmlpahhboidcpfjcncmcklf/reviews', 'About-link', 'link')}>Chrome网上商店</a>给二管家评价或者分享二管家给你身边的需要的人。</p>
            </section>
            <section className="section">
               <h5>建议？</h5>
               <p>如果你有任何好的建议，请去<a onClick={CL.bind(null,'https://chrome.google.com/webstore/detail/aajodjghehmlpahhboidcpfjcncmcklf/support','About-link','link')}>Chrome网上应用店</a>评论和提建议。</p>
            </section>
		  <section className="section">
		    <h5>鸣谢</h5>
			<ul>
			   <li>二箱使用了Facebook的<a href="https://github.com/facebook/react" target="_blank">React(BSD协议)</a>作为底层建筑</li>
			   <li>二箱使用了JS Foundation的<a href="https://jquery.com/" target="_blank">jQuery(MIT协议)</a>来处理一些DOM和Ajax请求</li>
			   <li>二箱使用了Hust.cc的<a href="https://github.com/hustcc/timeago.js" target="_blank">Timeago(MIT协议)</a>来显示时间</li>
			   <li>
				  一些图标来自与<a title="Flaticon" href="http://www.flaticon.com" target="_blank">www.flaticon.com</a>(<a title="Creative Commons BY 3.0" href="http://creativecommons.org/licenses/by/3.0/" target="_blank">CC 3.0 BY</a>)
				  <ul>
					 <li><img src="/thirdParty/options.svg" alt="" width="20" height="20" />来自于作者<a title="Gregor Cresnar" href="http://www.flaticon.com/authors/gregor-cresnar" target="_blank">Gregor Cresnar</a></li>
					 <li><img src="/thirdParty/remove.svg" alt="" width="20" height="20" />来自于作者<a title="Freepik" href="http://www.freepik.com" target="_blank">Freepik</a></li>
					 <li><img src="/thirdParty/add.svg" alt="" width="20" height="20" />来自于作者<a title="Madebyoliver" href="http://www.flaticon.com/authors/madebyoliver" target="_blank">Madebyoliver</a></li>
					 <li><img src="/thirdParty/power-button-on.svg" alt="" width="20" height="20" /><img src="/thirdParty/power-button-off.svg" alt="" width="20" height="20" />来自于作者<a title="Chanut is Industries" href="http://www.flaticon.com/authors/chanut-is-industries" target="_blank">Chanut is Industries</a></li>
					 <li><img src="/thirdParty/view-list.svg" alt="" width="20" height="20" />来自于作者<a href="http://www.freepik.com" title="Freepik" target="_blank">Freepik</a></li>
					 <li><img src="/thirdParty/view-grid.svg" alt="" width="20" height="20" />来自于作者<a href="http://www.flaticon.com/authors/elegant-themes" title="Elegant Themes" target="_blank">Elegant Themes</a></li>
				  </ul>
			   </li>
			</ul>
          </section>
		</div>
      );
    }
    else {
      return (
        <div id="about">
          <Helmet
            title="About"
          />
          <div className="section" id="top">
    <h3>NooBoss</h3>
    <a onClick={CL.bind(null, 'https://ainoob.com/project/nooboss', 'About-link', 'link')}><img id="icon1" className="spinRight" src="/images/icon_128.png" /></a>
    <a onClick={CL.bind(null, 'https://ainoob.com/project/noobox', 'About-link', 'link')}><img id="icon2" className="spinLeft" src="/images/icon_2.png" /></a>
</div>
<section className="section">
    <h5>Share NooBoss</h5>
    <p>Do you like NooBoss? If so, please consider sharing NooBoss!</p>
    <a className="shareItem" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A//ainoob.com/project/nooboss"><img className="shareIcon" src="thirdParty/facebook.png" /></a>
    <a className="shareItem" target="_blank" href="https://plus.google.com/share?url=https%3A//ainoob.com/project/nooboss"><img className="shareIcon" src="thirdParty/google.png" /></a>
    <a className="shareItem" target="_blank" href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A//ainoob.com/project/nooboss&title=NooBoss%20---%20A%20ultimate%20extension%20for%20Chrome%20extensions%%20managing&summary=&source="><img className="shareIcon" src="thirdParty/linkedin.png" /></a>
    <a className="shareItem" target="_blank" href="https://twitter.com/home?status=https%3A//ainoob.com/project/nooboss"><img className="shareIcon" src="thirdParty/twitter.png" /></a>
    <a className="shareItem" target="_blank" href="http://www.jiathis.com/send/?webid=tsina&url=https://ainoob.com/project/nooboss&title=NooBoss"><img className="shareIcon" src="thirdParty/sina.png" /></a>
    <a className="shareItem" target="_blank" href="http://www.jiathis.com/send/?webid=weixin&url=https://ainoob.com/project/nooboss&title=NooBoss"><img className="shareIcon" src="thirdParty/wechat.png" /></a>
    <a className="shareItem" target="_blank" href="http://www.jiathis.com/send/?webid=renren&url=https://ainoob.com/project/nooboss&title=NooBoss"><img className="shareIcon" src="thirdParty/renren.png" /></a>
</section>
<section className="section">
    <h5>What can NooBoss do?</h5>
    <p>Right now, NooBoss can (apps/extensions/theme will be called apps down below)</p>
    <ul>
        <li>
            Manage your apps
            <ul>
                <li>enable/disable/remove one or a bunch of apps</li>
            </ul>
        </li>
        <li>
            NooBoss community
            <ul>
                <li>get apps recommended by NooBoss community for the website you are visiting</li>
                <li>you can recommend useful apps to NooBoss community</li>
                <li>you can tag useful or spammy apps</li>
            </ul>
        </li>
        <li>
            Auto state management
            <ul>
                <li>
                    automatically enable/disable apps base on auto state rules
                    <ul>
                        <li>(you can save memory)</li>
                        <li>(enable apps only when you need them)</li>
                    </ul>
                </li>
            </ul>
        </li>
        <li>
            Show history of&nbsp;apps
            <ul>
                <li>installation, removal, enabling, disabling</li>
                <li>
                    show the version change
                    <ul>
                        <li>(you can tell when did apps got updated)</li>
                    </ul>
                </li>
            </ul>
        </li>
        <li>
            Show detailed information of&nbsp;apps
            <ul>
                <li>download crx file</li>
                <li>open manifest file</li>
                <li>see permissions</li>
                <li>And a lot more informations</li>
            </ul>
        </li>
    </ul>
    <p>If you have questions about how to use NooBoss, you can find instructions here: <a onClick={CL.bind(null, 'https://ainoob.com/project/nooboss', 'About-link', 'link')}>NooBoss project</a></p>
</section>
<section className="section">
    <h5>Who made NooBoss</h5>
    <p>NooBoss is an open source project under GPL-V3 made by <a onClick={CL.bind(null, 'https://ainoob.com', 'About-link', 'link')}>AInoob</a>, you can check the project progress <a onClick={CL.bind(null, 'https://ainoob.com/project/nooboss', 'About-link', 'link')}>here</a></p>
</section>
<section className="section">
    <h5>Privacy</h5>
    <p>NooBoss is a software with proud, it will never steal your private information, and it will never show ADs.</p>
    <p>NooBoss will send your NooBoss usage data to AInoob, so that he will know which function do people like about NooBoss and how many people are using NooBoss, thus get motivated to making NooBoss better and better</p>
</section>
<section className="section">
    <h5>How to support NooBoss?</h5>
    <p>NooBoss is free and open source software, I do not need any financial support from it. If you like it, please review NooBoss on <a onClick={CL.bind(null, 'https://chrome.google.com/webstore/detail/aajodjghehmlpahhboidcpfjcncmcklf/reviews', 'About-link', 'link')}>Chrome web store</a> and share it with people who might like it.</p>
</section>
<section className="section">
    <h5>Any suggestions?</h5>
    <p>If you have any suggestions about NooBoss, plese comment on support page in <a onClick={CL.bind(null, 'https://chrome.google.com/webstore/detail/aajodjghehmlpahhboidcpfjcncmcklf/support', 'About-link', 'link')}>Chrome web store</a>.</p>
</section>
<section className="section">
    <h5>Acknowledgements</h5>
    <ul>
        <li>NooBoss uses <a href="https://github.com/facebook/react" target="_blank">React(BSD Liscense)</a> from Facebook to build the bases</li>
        <li>NooBoss uses <a href="https://jquery.com/" target="_blank">jQuery(MIT Liscense)</a> from JS Foundation to handle DOM and Ajax requests</li>
        <li>NooBoss uses <a href="https://github.com/hustcc/timeago.js" target="_blank">Timeago(MIT Liscense)</a> from Hust.cc to display timeago</li>
        <li>
            Some icons are from<a title="Flaticon" href="http://www.flaticon.com" target="_blank">www.flaticon.com</a>(<a title="Creative Commons BY 3.0" href="http://creativecommons.org/licenses/by/3.0/" target="_blank">CC 3.0 BY</a>)
            <ul>
                <li><img src="/thirdParty/options.svg" alt="" width="20" height="20" />is made by <a title="Gregor Cresnar" href="http://www.flaticon.com/authors/gregor-cresnar" target="_blank">Gregor Cresnar</a></li>
                <li><img src="/thirdParty/remove.svg" alt="" width="20" height="20" />is made by <a title="Freepik" href="http://www.freepik.com" target="_blank">Freepik</a></li>
                <li><img src="/thirdParty/add.svg" alt="" width="20" height="20" />is made by <a title="Madebyoliver" href="http://www.flaticon.com/authors/madebyoliver" target="_blank">Madebyoliver</a></li>
                <li><img src="/thirdParty/power-button-on.svg" alt="" width="20" height="20" /><img src="/thirdParty/power-button-off.svg" alt="" width="20" height="20" />is made by <a title="Chanut is Industries" href="http://www.flaticon.com/authors/chanut-is-industries" target="_blank">Chanut is Industries</a></li>
				<li><img src="/thirdParty/view-list.svg" alt="" width="20" height="20" />is made by <a href="http://www.freepik.com" title="Freepik" target="_blank">Freepik</a></li>
				<li><img src="/thirdParty/view-grid.svg" alt="" width="20" height="20" />is made by <a href="http://www.flaticon.com/authors/elegant-themes" title="Elegant Themes" target="_blank">Elegant Themes</a></li>
            </ul>
        </li>
    </ul>
</section>
        </div>
      );
    }
  }
});
