import React, { useEffect, useState } from 'react';
import homeAPI from './../../apis/homeAPI';
import SimpleSlider from './../../components/Slick/SimpleSlider';

const NewBook = () => {
  const [newBooks, setNewBooks] = useState([]);

  useEffect(() => {
    homeAPI.getNewBooks().then((res) => {
      setNewBooks(res.data.data);
    }).catch((err) => {
      console.log(err);
    });
  }, []);
  return (
    <section className="_1khoi sachmoi mt-4">
      <div className="container">
        <div className="noidung bg-white" style={{ width: '100%' }}>
          <div className="row">
            {/*header */}
            <div className="col-12 d-flex justify-content-between align-items-center pb-2 bg-light">
              <h2 className="header text-uppercase" style={{ fontWeight: 400 }}>SÁCH MỚI NHẤT</h2>
              {/* <a href="/" className="btn btn-warning btn-sm text-white">Xem tất cả</a> */}
            </div>
          </div>

          <div className="khoisanpham">
            <SimpleSlider 
              books={newBooks}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewBook;
