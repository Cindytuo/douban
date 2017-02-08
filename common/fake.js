const fake = {
    data: {
        review: [{
            user: '苗朵',
            subject: {
                title: '名侦探柯南：纯黑的噩梦',
                rating: {
                    average: 7.4,
                    max: 10,
                    min: 0,
                    stars: "40"
                },
                images: {
                    large: "https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p494268647.jpg",
                    medium: "https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2398143099.jpg",
                    small: "https://img1.doubanio.com/view/movie_poster_cover/ipst/public/p494268647.jpg"
                }
            },
            head: '真的是噩梦，愿早日醒来',
            body: '柯南系列真还可以继续走下去吗?还不如之前的《红与黑的碰撞》系列,有推理，有故事，有人物，当初真的迷得我不要不要,同样的讲黑暗组织,差别怎样就这么大呢?这已经不是以前的动画推理剧了,它不需要剧透,只有脑洞大开,根本不需要逻辑推理,因为真的就是不通.纯黑的恶梦,真的是柯南迷的恶梦,它已经沦为动画动作大片了(不可否认,追逐打斗场面还真挺逼真的).作为曾经的剧迷，依旧的柯南迷，现在已经被这几年的剧场版把热情渐渐消磨，但作为柯南迷还是要坚持下去，继续支持的。柯南真的不能回归原来了吗？真的希望可以找回原来的热情。'
        }, {
            user: '花蝴蝶',
            subject: {
                title: '遇见爱情的李先生',
                rating: {
                    average: 7.4,
                    max: 10,
                    min: 0,
                    stars: "40"
                },
                images: {
                    large: "https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p494268647.jpg",
                    medium: "https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2398143099.jpg",
                    small: "https://img1.doubanio.com/view/movie_poster_cover/ipst/public/p494268647.jpg"
                }
            },
            head: '男主角超自恋，女主角武力太强，吐槽一下哈哈哈哈哈哈哈哈哈哈',
            body: '利耀南太可爱了吧，碰瓷小能手，卖怂小能手。完全反套路的男主角，吵架吵不过，打架也打不过。但是真的是个善良的小天使，不计较女主撒他一身鱼子酱，好心帮女主妈妈解围，看预告还背女主妈妈去医院。<br>关键他一开始做这些既不是因为同情女主也不是因为喜欢女主，也太善良太可爱了。<br>再来说说女主小可爱，暴力美少女。吵架比男主厉害，打架也比男主厉害。自立自强的美少女，怼天怼地，唯独对自己妈妈特别好，很孝顺很热血。<br>周冬雨的颜值也特别小清新，一看就招人喜欢。<br>目前看前两集还不错，会继续关注的。'
        }, {
            user: '黑白007',
            subject: {
                title: '孤芳不自赏',
                rating: {
                    average: 7.4,
                    max: 10,
                    min: 0,
                    stars: "40"
                },
                images: {
                    large: "https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p494268647.jpg",
                    medium: "https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2407425119.jpg",
                    small: "https://img1.doubanio.com/view/movie_poster_cover/ipst/public/p494268647.jpg"
                }
            },
            head: '楚北捷对白娉婷感情之深',
            body: '个人觉得第四集应该说是楚北捷与白娉婷感情的升华。在一开头白娉婷亲自将粥揣给楚北捷的时候所说的话。让楚北捷很诧异，因为在他的算盘里，白不会说这些。当白对楚说要止战的时候。其实就点到了楚北捷的心里，让楚北捷觉得白娉婷就是他的知己，就是他的生命中最爱的人。当白被侍卫带走的时，白对楚所说的一习话更让楚痛心。也许当时的白娉婷在对楚北捷用美人计，但其实楚北捷已经进入到她的心里，只是她还没有知道而已。当白被带到大殿要被动刑的时候，楚毫不犹豫的站在了白的跟前，用自己的身体挡住了要伤害她的人。当白向晋王说出，她所出是楚北捷对她说出要止战的，楚北捷也毫不犹豫的站出来承认并与白站在一起就说明。楚已经开始用生命来保护他所爱的人。当白被带走关到大牢的时候，楚一度要冲出去将白救回。这些行动都表明楚北捷对白的感情已经到了一定的高度。也就是白进大牢的晚上，楚仍旧按着习俗在外面守着，并用信物来表明他就是小时候的那个她捡回的男孩，这一切都让人很感动。当楚北捷在细雨中为白守夜，就算在铁石心肠的人也会被他所感动。所以白娉婷已经对楚北捷有了感情，但他们之间的隔膜其实就是楚北捷所谓的身份。就像白娉婷所说如果他不是楚北捷该多好...'
        }]
    }
};
module.exports = {
    getReview: fake.data.review
};
