/* eslint-disable @next/next/no-page-custom-font */
import App from 'next/app';
import Head from 'next/head';
import Router from 'next/router';

import { Navbar, Footer } from '../components';
import Loader from '../components/UIs/Loader/Loader';

import ThemeContextProvider from '../theme/theme';
// STORE STUFF
import { wrapper } from '../store/store';

// TRANSLATION STUFF
import { appWithTranslation } from "next-i18next";

import Cookies from 'universal-cookie';
const cookie = new Cookies();

import "react-modal-video/scss/modal-video.scss";
import '../public/css/all.min.css';
import '../styles/globals.scss';
import '../styles/variables.scss';

class MyApp extends App {

  static getInitialProps = wrapper.getInitialAppProps(store => async context => {
      return {
        ...(await App.getInitialProps(context)).pageProps,
        locale: context.ctx.locale
      };
  });

  state = {
    showLoader: false,
    scrollY: 0
  }

  gotToTop = () => {
    document.body.scrollTo(0, 0)
  }

  componentDidMount() {
    if (!cookie.get('GridsAppsLang')) {
      cookie.set('GridsAppsLang', 'en', {path: "/"})
    }

    Router.events.on('routeChangeStart', () => {
      this.setState({
        showLoader: true
      })
    })

    Router.events.on('routeChangeComplete', () => {
      this.setState({
        showLoader: false
      })
    })

    const handleScroll = () => {
      this.setState({
        scrollY: document.body.scrollTop
      })
    };
    handleScroll();
    document.body.addEventListener("scroll", handleScroll);
  }

  render() {
      const {Component, pageProps, locale} = this.props;

      return (
        <div id={locale}>
          <ThemeContextProvider>
            <Head>
              <title>Grids Apps</title>
              <meta name="description" content="Generated by create next app" />
              <link rel="icon" href="/imgs/navbar/favicon.png" />
              <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;700;800;900&display=swap" rel="stylesheet"></link>
            </Head>
            <Navbar />
            <Component {...pageProps} />
            {this.state.showLoader && <Loader />}
            <div className={`${locale} ${this.state.scrollY >= 500 ? 'showing' : 'hiding'} goUp`} onClick={this.gotToTop}>
              <i className="fa-light fa-up"></i>
            </div>
            <Footer />
          </ThemeContextProvider>
        </div>
      );
  }
}

export default wrapper.withRedux(appWithTranslation(MyApp));
