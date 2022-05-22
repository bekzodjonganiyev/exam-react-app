import "./singlePicture.css"

import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import axios from "axios"
import CardLink from "../../components/CardLink/CardLink"

const SinglePicture = () => {

    const { id } = useParams()


    const [showPicture, setShowPicture] = useState({
        isFatched: false,
        data: {},
        error: null,
    })

    const [pictureList, setPictureList] = useState({
        isFatched: false,
        data: {},
        error: null,
    })

    useEffect(() => {

        //SHOW PICTURE 
        axios.get(`https://jsonplaceholder.typicode.com/photos?id=${id}`)
            .then(res => {
                setShowPicture({
                    isFatched: true,
                    data: res.data,
                    error: false
                })
            })
            .catch(() => {
                setShowPicture({
                    isFatched: true,
                    data: {},
                    error: true
                })
            })

        //LIST PICTURE
        axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)
            .then(res => {
                setPictureList({
                    isFatched: true,
                    data: res.data,
                    error: false
                })
            })
            .catch(() => {
                setPictureList({
                    isFatched: true,
                    data: {},
                    error: true
                })
            })

    }, [id])

    console.log(showPicture);
    console.log(pictureList, "hhhhh");

    return (
        <div className="single-picture-page">
            <div className="show-picture">
                {
                    showPicture.isFatched ?
                        showPicture.data.map(item => (
                            <img
                                src={item.url}
                                alt={item.title}
                                style={{
                                    width: "100%",
                                    height: "450px",
                                    borderRadius: "10px"
                                }} />
                        )) : ""
                }

                <div className="about-video">
                    <div>
                        <h2>Dude You Re Getting A Telescope</h2> 
                        <p>123k views</p>
                    </div>
                    <div>
                        <span>
                            <svg width="100" height="40" viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect opacity="0.3" width="100" height="40" rx="20" fill="#EBEBEB" />
                                <path opacity="0.24" fill-rule="evenodd" clip-rule="evenodd" d="M20 25.7329C20 26.4323 20.5968 26.998 21.333 26.998C21.333 26.998 28.0491 27.0025 29.0029 26.998C31.0812 27.0194 32.3926 26.4547 32.9582 24.9982C33.11 24.6258 33.9501 21.4169 33.9574 21.381C34.1966 20.3171 33.4012 19.3878 32.2412 19.3878L29.8353 19.3877C29.6496 19.3877 29.5284 19.2485 29.5647 19.0761C29.5647 19.0761 29.7434 18.2321 29.7822 18.0228C29.9276 17.24 30.0069 16.6244 29.9995 16.2066C30.012 15.5465 29.6391 14.9927 29.0497 14.5558C28.7323 14.3205 28.2469 14.1014 28.2469 14.1014C27.7415 13.8589 27.136 14.0683 26.9014 14.5507C26.9014 14.5507 24.9871 18.5117 24.8279 18.8141C24.6688 19.1166 24.252 19.388 23.8825 19.388H21.333C20.5975 19.388 20 19.9545 20 20.6532V25.7329ZM29.0173 25.7298C30.4976 25.745 31.231 25.4606 31.6047 24.7784H31.3349C30.9656 24.7784 30.6663 24.497 30.6663 24.1443C30.6663 23.794 30.9618 23.5101 31.3349 23.5101H32.0027C32.0577 23.309 32.1167 23.093 32.1758 22.8759H31.6682C31.2989 22.8759 30.9996 22.5945 30.9996 22.2418C30.9996 21.8915 31.2951 21.6076 31.6682 21.6076H32.5203C32.5978 21.3214 32.6492 21.1312 32.6517 21.1214C32.715 20.843 32.5544 20.6562 32.2411 20.6562L29.8352 20.656C28.8106 20.656 28.0553 19.7868 28.2577 18.8257C28.2646 18.7931 28.4566 17.8703 28.4693 17.8023C28.607 17.06 28.6717 16.5296 28.6664 16.2278L28.6665 16.1837C28.6701 15.9944 28.549 15.7926 28.2302 15.5563C28.1944 15.5297 27.9599 15.3947 27.9599 15.3947L26.038 19.3467C25.6818 20.0791 24.8487 20.6081 23.9998 20.6532V25.7323C26.115 25.7318 28.7585 25.7309 29.0173 25.7298ZM22.6666 20.6564H21.333L21.3333 25.7329L22.6666 25.7326V20.6564Z" fill="black" />
                                <path d="M46.56 25.408V15.376L47.312 15.76L44.224 17.728V16.464L47.136 14.608H47.888V25.408H46.56ZM44.048 26V24.896H50.4V26H44.048ZM52.9218 26V25.008L56.9058 20.592C57.4391 19.9947 57.8284 19.456 58.0738 18.976C58.3191 18.496 58.4418 18.016 58.4418 17.536C58.4418 16.9067 58.2604 16.4267 57.8978 16.096C57.5351 15.7547 57.0178 15.584 56.3458 15.584C55.7911 15.584 55.2471 15.696 54.7138 15.92C54.1804 16.1333 53.6471 16.4587 53.1138 16.896L52.6178 15.888C53.0658 15.4613 53.6311 15.12 54.3138 14.864C54.9964 14.608 55.6844 14.48 56.3778 14.48C57.0711 14.48 57.6684 14.6027 58.1698 14.848C58.6818 15.0827 59.0764 15.424 59.3538 15.872C59.6311 16.32 59.7698 16.8533 59.7698 17.472C59.7698 18.1227 59.6204 18.752 59.3218 19.36C59.0338 19.9573 58.5484 20.6293 57.8658 21.376L54.0258 25.536L53.9298 24.896H60.2498V26H52.9218ZM65.8755 26.112C65.1395 26.112 64.4302 25.9893 63.7475 25.744C63.0755 25.4987 62.5048 25.152 62.0355 24.704L62.5475 23.696C63.0595 24.1333 63.5875 24.464 64.1315 24.688C64.6755 24.9013 65.2462 25.008 65.8435 25.008C66.6542 25.008 67.2675 24.8267 67.6835 24.464C68.1102 24.1013 68.3235 23.568 68.3235 22.864C68.3235 22.16 68.1048 21.6373 67.6675 21.296C67.2302 20.944 66.5742 20.768 65.6995 20.768H64.3875V19.664H65.4435C66.2862 19.664 66.9315 19.4773 67.3795 19.104C67.8275 18.7307 68.0515 18.1973 68.0515 17.504C68.0515 16.8853 67.8648 16.4107 67.4915 16.08C67.1288 15.7493 66.6115 15.584 65.9395 15.584C65.3742 15.584 64.8248 15.696 64.2915 15.92C63.7582 16.1333 63.2302 16.4587 62.7075 16.896L62.2115 15.888C62.6702 15.4507 63.2355 15.1093 63.9075 14.864C64.5795 14.608 65.2728 14.48 65.9875 14.48C66.6702 14.48 67.2675 14.6027 67.7795 14.848C68.2915 15.0827 68.6808 15.4187 68.9475 15.856C69.2248 16.2933 69.3635 16.8107 69.3635 17.408C69.3635 18.112 69.1768 18.7147 68.8035 19.216C68.4408 19.7067 67.9395 20.0427 67.2995 20.224L67.2515 20.064C68.0195 20.224 68.6062 20.5493 69.0115 21.04C69.4168 21.5307 69.6195 22.1547 69.6195 22.912C69.6195 23.904 69.2835 24.688 68.6115 25.264C67.9395 25.8293 67.0275 26.112 65.8755 26.112ZM77.4533 26L73.0693 21.888L77.1173 17.968H78.7653L74.2853 22.256L74.3333 21.44L79.1493 26H77.4533ZM72.0293 26V14.224H73.3253V26H72.0293Z" fill="#192646" />
                            </svg>
                        </span>
                        <span>
                            <svg width="100" height="40" viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect opacity="0.3" width="100" height="40" rx="20" fill="#EBEBEB" />
                                <path opacity="0.24" fill-rule="evenodd" clip-rule="evenodd" d="M21 17.2671C21 16.5677 21.5968 16.002 22.333 16.002C22.333 16.002 29.0491 15.9975 30.0029 16.002C32.0812 15.9806 33.3926 16.5453 33.9582 18.0018C34.11 18.3742 34.9501 21.5831 34.9574 21.619C35.1966 22.6829 34.4012 23.6122 33.2412 23.6122L30.8353 23.6123C30.6496 23.6123 30.5284 23.7515 30.5647 23.9239C30.5647 23.9239 30.7434 24.7679 30.7822 24.9772C30.9276 25.76 31.0069 26.3756 30.9995 26.7934C31.012 27.4535 30.6391 28.0073 30.0497 28.4442C29.7323 28.6795 29.2469 28.8986 29.2469 28.8986C28.7415 29.1411 28.136 28.9317 27.9014 28.4493C27.9014 28.4493 25.9871 24.4883 25.8279 24.1859C25.6688 23.8834 25.252 23.612 24.8825 23.612H22.333C21.5975 23.612 21 23.0455 21 22.3468V17.2671ZM30.0173 17.2702C31.4976 17.255 32.231 17.5394 32.6047 18.2216H32.3349C31.9656 18.2216 31.6663 18.503 31.6663 18.8557C31.6663 19.206 31.9618 19.4899 32.3349 19.4899H33.0027C33.0577 19.691 33.1167 19.907 33.1758 20.1241H32.6682C32.2989 20.1241 31.9996 20.4055 31.9996 20.7582C31.9996 21.1085 32.2951 21.3924 32.6682 21.3924H33.5203C33.5978 21.6786 33.6492 21.8688 33.6517 21.8786C33.715 22.157 33.5544 22.3438 33.2411 22.3438L30.8352 22.344C29.8106 22.344 29.0553 23.2132 29.2577 24.1743C29.2646 24.2069 29.4566 25.1297 29.4693 25.1977C29.607 25.94 29.6717 26.4704 29.6664 26.7722L29.6665 26.8163C29.6701 27.0056 29.549 27.2074 29.2302 27.4437C29.1944 27.4703 28.9599 27.6053 28.9599 27.6053L27.038 23.6533C26.6818 22.9209 25.8487 22.3919 24.9998 22.3468V17.2677C27.115 17.2682 29.7585 17.2691 30.0173 17.2702ZM23.6666 22.3436H22.333L22.3333 17.2671L23.6666 17.2674V22.3436Z" fill="black" />
                                <path d="M49.032 26V16.256H49.432L44.696 23.088L44.712 22.432H52.072V23.52H43.784V22.528L49.272 14.608H50.344V26H49.032ZM57.2818 26.112C56.5458 26.112 55.8364 25.9893 55.1538 25.744C54.4818 25.4987 53.9111 25.152 53.4418 24.704L53.9538 23.696C54.4658 24.1333 54.9938 24.464 55.5378 24.688C56.0818 24.9013 56.6524 25.008 57.2498 25.008C58.0604 25.008 58.6738 24.8267 59.0898 24.464C59.5164 24.1013 59.7298 23.568 59.7298 22.864C59.7298 22.16 59.5111 21.6373 59.0738 21.296C58.6364 20.944 57.9804 20.768 57.1058 20.768H55.7938V19.664H56.8498C57.6924 19.664 58.3378 19.4773 58.7858 19.104C59.2338 18.7307 59.4578 18.1973 59.4578 17.504C59.4578 16.8853 59.2711 16.4107 58.8978 16.08C58.5351 15.7493 58.0178 15.584 57.3458 15.584C56.7804 15.584 56.2311 15.696 55.6978 15.92C55.1644 16.1333 54.6364 16.4587 54.1138 16.896L53.6178 15.888C54.0764 15.4507 54.6418 15.1093 55.3138 14.864C55.9858 14.608 56.6791 14.48 57.3938 14.48C58.0764 14.48 58.6738 14.6027 59.1858 14.848C59.6978 15.0827 60.0871 15.4187 60.3538 15.856C60.6311 16.2933 60.7698 16.8107 60.7698 17.408C60.7698 18.112 60.5831 18.7147 60.2098 19.216C59.8471 19.7067 59.3458 20.0427 58.7058 20.224L58.6578 20.064C59.4258 20.224 60.0124 20.5493 60.4178 21.04C60.8231 21.5307 61.0258 22.1547 61.0258 22.912C61.0258 23.904 60.6898 24.688 60.0178 25.264C59.3458 25.8293 58.4338 26.112 57.2818 26.112ZM67.1635 26.112C66.4702 26.112 65.7875 25.9893 65.1155 25.744C64.4435 25.488 63.8782 25.1413 63.4195 24.704L63.9155 23.696C64.4382 24.1227 64.9662 24.448 65.4995 24.672C66.0435 24.896 66.5982 25.008 67.1635 25.008C67.9635 25.008 68.5875 24.784 69.0355 24.336C69.4942 23.8773 69.7235 23.2587 69.7235 22.48C69.7235 21.9787 69.6222 21.5413 69.4195 21.168C69.2168 20.784 68.9288 20.4853 68.5555 20.272C68.1928 20.0587 67.7608 19.952 67.2595 19.952C66.7155 19.952 66.2248 20.064 65.7875 20.288C65.3608 20.5013 64.9822 20.832 64.6515 21.28H63.7395V14.608H70.5715V15.696H65.0515V20.304L64.6355 20.256C64.9448 19.808 65.3395 19.4613 65.8195 19.216C66.3102 18.9707 66.8595 18.848 67.4675 18.848C68.1928 18.848 68.8222 19.0027 69.3555 19.312C69.8888 19.6107 70.2995 20.032 70.5875 20.576C70.8755 21.12 71.0195 21.7493 71.0195 22.464C71.0195 23.1787 70.8595 23.8133 70.5395 24.368C70.2302 24.912 69.7875 25.3387 69.2115 25.648C68.6355 25.9573 67.9528 26.112 67.1635 26.112ZM78.4533 26L74.0693 21.888L78.1173 17.968H79.7653L75.2853 22.256L75.3333 21.44L80.1493 26H78.4533ZM73.0293 26V14.224H74.3253V26H73.0293Z" fill="#192646" />
                            </svg>

                        </span>
                        <span>
                            <svg width="100" height="40" viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect opacity="0.3" width="100" height="40" rx="20" fill="#EBEBEB" />
                                <path opacity="0.24" d="M24.5556 15L30 20.6L24.5556 26.2V22.92C20.6667 22.92 17.9444 24.2 16 27C16.7778 23 19.1111 19 24.5556 18.2V15Z" fill="black" />
                                <path d="M43.024 26.128C42.4373 26.128 41.888 26.08 41.376 25.984C40.864 25.8773 40.3893 25.7173 39.952 25.504C39.5147 25.28 39.12 25.008 38.768 24.688L39.264 23.68C39.84 24.16 40.416 24.5013 40.992 24.704C41.5787 24.9067 42.2613 25.008 43.04 25.008C43.9467 25.008 44.6507 24.832 45.152 24.48C45.6533 24.1173 45.904 23.6107 45.904 22.96C45.904 22.5653 45.776 22.2507 45.52 22.016C45.2747 21.7707 44.9333 21.5787 44.496 21.44C44.0693 21.2907 43.584 21.152 43.04 21.024C42.496 20.9067 41.9787 20.7733 41.488 20.624C40.9973 20.464 40.56 20.2667 40.176 20.032C39.8027 19.7973 39.5093 19.4987 39.296 19.136C39.0827 18.7733 38.976 18.32 38.976 17.776C38.976 17.1253 39.1467 16.5547 39.488 16.064C39.8293 15.5627 40.3093 15.1733 40.928 14.896C41.5467 14.6187 42.2773 14.48 43.12 14.48C43.6427 14.48 44.144 14.5387 44.624 14.656C45.104 14.7627 45.5467 14.9227 45.952 15.136C46.368 15.3493 46.736 15.6107 47.056 15.92L46.544 16.928C46.0213 16.4693 45.4827 16.1333 44.928 15.92C44.3733 15.7067 43.7707 15.6 43.12 15.6C42.2347 15.6 41.5413 15.7867 41.04 16.16C40.5387 16.5333 40.288 17.056 40.288 17.728C40.288 18.144 40.4 18.48 40.624 18.736C40.848 18.992 41.1627 19.2 41.568 19.36C41.9733 19.5093 42.4373 19.648 42.96 19.776C43.5147 19.904 44.048 20.0427 44.56 20.192C45.072 20.3413 45.5253 20.528 45.92 20.752C46.3253 20.9653 46.6453 21.248 46.88 21.6C47.1147 21.9413 47.232 22.3787 47.232 22.912C47.232 23.5627 47.0613 24.128 46.72 24.608C46.3787 25.088 45.8933 25.4613 45.264 25.728C44.6347 25.9947 43.888 26.128 43.024 26.128ZM49.2168 26V14.224H50.5128V19.584L50.3048 19.744C50.5288 19.0933 50.9021 18.6027 51.4248 18.272C51.9474 17.9307 52.5501 17.76 53.2328 17.76C55.1634 17.76 56.1288 18.8213 56.1288 20.944V26H54.8328V21.008C54.8328 20.2613 54.6834 19.7173 54.3848 19.376C54.0861 19.024 53.6168 18.848 52.9768 18.848C52.2301 18.848 51.6328 19.0773 51.1848 19.536C50.7368 19.9947 50.5128 20.6133 50.5128 21.392V26H49.2168ZM61.6641 26.112C60.9495 26.112 60.3201 25.9467 59.7761 25.616C59.2428 25.2747 58.8268 24.7947 58.5281 24.176C58.2401 23.5467 58.0961 22.8107 58.0961 21.968C58.0961 21.1253 58.2455 20.3893 58.5441 19.76C58.8428 19.1307 59.2588 18.64 59.7921 18.288C60.3361 17.936 60.9601 17.76 61.6641 17.76C62.4001 17.76 63.0241 17.9413 63.5361 18.304C64.0481 18.6667 64.3948 19.184 64.5761 19.856L64.3841 19.984V17.952H65.6641V26H64.3841V23.92L64.5761 24.016C64.3948 24.688 64.0481 25.2053 63.5361 25.568C63.0241 25.9307 62.4001 26.112 61.6641 26.112ZM61.9201 25.04C62.7095 25.04 63.3175 24.7733 63.7441 24.24C64.1708 23.696 64.3841 22.928 64.3841 21.936C64.3841 20.944 64.1655 20.1813 63.7281 19.648C63.3015 19.1147 62.6988 18.848 61.9201 18.848C61.1308 18.848 60.5121 19.1253 60.0641 19.68C59.6268 20.224 59.4081 20.9867 59.4081 21.968C59.4081 22.9493 59.6268 23.7067 60.0641 24.24C60.5121 24.7733 61.1308 25.04 61.9201 25.04ZM68.1699 26V20.208C68.1699 19.8347 68.1592 19.4613 68.1379 19.088C68.1272 18.704 68.0952 18.3253 68.0419 17.952H69.2739L69.4499 19.936L69.2739 19.888C69.4232 19.184 69.7432 18.656 70.2339 18.304C70.7352 17.9413 71.2952 17.76 71.9139 17.76C72.0525 17.76 72.1805 17.7707 72.2979 17.792C72.4259 17.8027 72.5432 17.824 72.6499 17.856L72.6179 19.04C72.3725 18.9547 72.0899 18.912 71.7699 18.912C71.2152 18.912 70.7672 19.0347 70.4259 19.28C70.0952 19.5253 69.8499 19.84 69.6899 20.224C69.5405 20.5973 69.4659 20.992 69.4659 21.408V26H68.1699ZM80.4025 25.04C80.0505 25.3707 79.5972 25.632 79.0425 25.824C78.4985 26.016 77.9385 26.112 77.3625 26.112C76.5305 26.112 75.8105 25.9467 75.2025 25.616C74.6052 25.2853 74.1412 24.8107 73.8105 24.192C73.4905 23.5627 73.3305 22.816 73.3305 21.952C73.3305 21.12 73.4905 20.3893 73.8105 19.76C74.1305 19.1307 74.5732 18.64 75.1385 18.288C75.7145 17.936 76.3758 17.76 77.1225 17.76C77.8372 17.76 78.4505 17.92 78.9625 18.24C79.4745 18.5493 79.8638 18.9973 80.1305 19.584C80.4078 20.1707 80.5465 20.8747 80.5465 21.696V21.936H74.4665V21.088H79.8105L79.3945 21.68C79.4158 20.7413 79.2292 20.0213 78.8345 19.52C78.4505 19.0187 77.8852 18.768 77.1385 18.768C76.3598 18.768 75.7465 19.0453 75.2985 19.6C74.8612 20.144 74.6425 20.9013 74.6425 21.872C74.6425 22.9173 74.8718 23.7067 75.3305 24.24C75.7998 24.7733 76.4825 25.04 77.3785 25.04C77.8478 25.04 78.2958 24.9653 78.7225 24.816C79.1598 24.656 79.5758 24.416 79.9705 24.096L80.4025 25.04Z" fill="#192646" />
                            </svg>

                        </span>
                    </div>
                </div>
            </div>
            <div className="list-picture">
                <h1 style={{
                    marginTop: "0"
                }}>Next</h1>
                <div style={{ margin: "0 auto" }}>
                    {
                        pictureList.isFatched ?
                            pictureList.data.splice(0, 20).map(item => (
                                <CardLink id={item.id} img={item.thumbnailUrl} title={item.title} key={item.id} />
                            )) : ""
                    }
                </div>
            </div>
        </div>
    )
}

export default SinglePicture