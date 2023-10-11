import React, { useEffect } from "react";
import { useState } from "react";
import CustomForm from "./Form";
import { v4 as uuidv4 } from "uuid";

function Nav() {
  const initialtweets = JSON.parse(localStorage.getItem("tweets"));
  // console.log(initialtweets);

  const [isShowForm, setIsShowForm] = useState(false);
  const [addTweet, setAddTweet] = useState(initialtweets);
  const [searchVal, setSearchVal] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  function formatTime() {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const amOrPm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours ? hours : 12;

    minutes = minutes < 10 ? "0" + minutes : minutes;

    return `${hours}:${minutes} ${amOrPm}`;
  }
  const getCurrentDateFormatted = () => {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month}` : month;
    const formattedDate = `${formattedDay}/${formattedMonth}/${year}`;
    return formattedDate;
  };
  function handleAddTweet(tweet) {
    const data = {
      id: uuidv4(),
      tweet: tweet,
      date: getCurrentDateFormatted(),
      time: formatTime(),
      datetime: new Date(),
    };

    const updatedTweets = [...addTweet, data].sort(
      (a, b) => b.datetime - a.datetime
    );

    setAddTweet(updatedTweets);
    console.log(updatedTweets);
    setIsShowForm(false);
  }

  function handleSearchClick() {
    // if (searchVal === "") {
    //   // setProducts(productList);
    //   setAddTweet(addTweet);
    //   return;
    // }
    // const filterBySearch = addTweet.filter((item) => {
    //   if (item.tweet.toLowerCase().includes(searchVal.toLowerCase())) {
    //     return item;
    //   }
    // });
    // // setProducts(filterBySearch);
    // setAddTweet(filterBySearch);
  }

  // function onChange(value) {
  //   const searchTweet = [...addTweet];
  //   setSearchVal(value);
  //   if (searchVal === "") {
  //     // setProducts(productList);
  //     console.log("inside");
  //     setAddTweet(addTweet);

  //     return;
  //   }
  //   const filterBySearch = searchTweet.filter((item) => {
  //     if (item.tweet.toLowerCase().includes(searchVal.toLowerCase())) {
  //       return item;
  //     }
  //   });
  //   // setProducts(filterBySearch);
  //   setAddTweet(filterBySearch);
  // }
  useEffect(() => {
    const searchTweet = [...addTweet];

    const filterBySearch = searchTweet.filter((item) => {
      if (item.tweet.toLowerCase().includes(searchVal.toLowerCase())) {
        return item;
      }
    });
    if (searchVal === "") {
      console.log("inside");
      setAddTweet(initialtweets);
      console.log(initialtweets);

      return;
    }
    // setAddTweet(filterBySearch);
    console.log(filterBySearch);
    setFilteredResults(filterBySearch);

    // setAddTweet(addTweet);
  }, [searchVal]);
  useEffect(() => {
    localStorage.setItem("tweets", JSON.stringify(addTweet));
  });

  return (
    <div>
      <div className="navbar">
        <div className="link">
          <button className="home-btn" onClick={() => setIsShowForm(false)}>
            Home
          </button>
          <button className="addform-btn" onClick={() => setIsShowForm(true)}>
            Add Form
          </button>
        </div>
        <div>
          <h1>Tweety</h1>
        </div>
      </div>
      {isShowForm ? (
        <>
          <CustomForm addTweet={(tweet) => handleAddTweet(tweet)} />
        </>
      ) : (
        <>
          <div className="search">
            <input
              type="text"
              placeholder="Search here ....."
              onChange={(e) => setSearchVal(e.target.value)}
            />
            <button className="Search-btn" onClick={handleSearchClick}>
              Search
            </button>
          </div>
          <div class="tweet-parent"></div>
          <div class="tweet-container">
            <div class="tweet-list-title">
              <h2>
                List of <span class="tweet-list">Tweet</span>
              </h2>
            </div>
            <div className="tweet-records">
              {addTweet.map((item, index) => {
                return (
                  <div key={index} id={item.id} className="card">
                    <div className="tweet-para">
                      <p>{item.tweet}</p>
                    </div>
                    <div className="emoji-head">
                      <div className="emoji">
                        <button
                          className="like"
                          id={`like-${item.id}`}
                          onClick={() => handleLike(`like-${item.id}`)}
                        >
                          &#128077;
                        </button>
                        <button
                          id={`dislike-${item.id}`}
                          onClick={() => handleLike(`dislike-${item.id}`)}
                        >
                          &#128078;
                        </button>
                      </div>
                      <div className="date">
                        {item.date}, {item.time}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="tweet-records">
            {filteredResults.map((item, index) => {
              return (
                <div key={index} id={item.id} className="card">
                  <div className="tweet-para">
                    <p>{item.tweet}</p>
                  </div>
                  <div className="emoji-head">
                    <div className="emoji">
                      <button
                        className="like"
                        id={`like-${item.id}`}
                        onClick={() => handleLike(`like-${item.id}`)}
                      >
                        &#128077;
                      </button>
                      <button
                        id={`dislike-${item.id}`}
                        onClick={() => handleLike(`dislike-${item.id}`)}
                      >
                        &#128078;
                      </button>
                    </div>
                    <div className="date">
                      {item.date}, {item.time}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
export default Nav;
