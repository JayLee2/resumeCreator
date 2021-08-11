import React from 'react';
import styles from './index.less';
import { useHistory } from 'react-router';
import Logo from '@assets/logo.jpeg';
import { shell } from 'electron';
import { ROUTER_ENTRY } from '@src/common/constants/router';
import { isHttpOrHttpsUrl } from '@src/common/utils/router';

function Root() {
  const history = useHistory();
  const onRouterToLink = (router: TSRouter.Item) => {
    if (isHttpOrHttpsUrl(router.url)) {
      history.push(router.url);
    } else {
      shell.openExternal(router.url);
    }
  };
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <img src={Logo} alt="" />
        <div className={styles.title}>VisResumeMook</div>
        <div className={styles.tips}>一个模板简历制作平台, 让你的简历更加出众 ~</div>
        <div className={styles.action}>
          {ROUTER_ENTRY.map((router: TSRouter.Item) => {
            return (
              <div key={router.key} onClick={() => onRouterToLink(router)} className="item">
                {router.text}
              </div>
            );
          })}
        </div>
        <div className="copyright">
          <div className="footer">
            <p className="copyright">
              Copyright © 2018-{new Date().getFullYear()} All Rights Reserved. Copyright By pengdaokuan
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Root;
