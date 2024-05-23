import React from 'react';
import visaPayment from './../../assets/images/visa-payment.jpg';
import masterCardPayment from './../../assets/images/master-card-payment.jpg';
import jcbPayment from './../../assets/images/jcb-payment.jpg';
import atmPayment from './../../assets/images/atm-payment.jpg';
import codPayment from './../../assets/images/cod-payment.jpg';
import payooPayment from './../../assets/images/payoo-payment.jpg';
import dkbct from './../../assets/images/dang-ky-bo-cong-thuong.png';

const FooterBottom = () => {
  return (
    <footer>
      <div className="container py-4">
        <div className="row">
          <div className="col-md-3 col-xs-6">
            <div className="gioithieu">
              <h3 className="header text-uppercase font-weight-bold">Về TextBook</h3>
              <a href="/">Giới thiệu về TextBook</a>
              <a href="/">Tuyển dụng</a>
              <div className="fb-like" data-href="https://www.facebook.com/tri.doviet.3/" data-width="300px" data-layout="button" data-action="like" data-size="small" data-share="true" />
            </div>
          </div>
          <div className="col-md-3 col-xs-6">
            <div className="hotrokh">
              <h3 className="header text-uppercase font-weight-bold">HỖ TRỢ KHÁCH HÀNG</h3>
              <a href="https://www.facebook.com/tri.doviet.3/">Hướng dẫn đặt hàng</a>
              <a href="https://www.facebook.com/tri.doviet.3/">Phương thức thanh toán</a>
              <a href="https://www.facebook.com/tri.doviet.3/">Phương thức vận chuyển</a>
              <a href="https://www.facebook.com/tri.doviet.3/">Chính sách đổi trả</a>
            </div>
          </div>
          <div className="col-md-3 col-xs-6">
            <div className="lienket">
              <h3 className="header text-uppercase font-weight-bold">HỢP TÁC VÀ LIÊN KẾT</h3>
              <img src={dkbct} alt="dang-ky-bo-cong-thuong" />
            </div>
          </div>
          <div className="col-md-3 col-xs-6">
            <div className="ptthanhtoan">
              <h3 className="header text-uppercase font-weight-bold">Phương thức thanh toán</h3>
              <img src={visaPayment} alt="visa-payment" />
              <img src={masterCardPayment} alt="master-card-payment" />
              <img src={jcbPayment} alt="jcb-payment" />
              <img src={atmPayment} alt="atm-payment" />
              <img src={codPayment} alt="cod-payment" />
              <img src={payooPayment} alt="payoo-payment" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterBottom
