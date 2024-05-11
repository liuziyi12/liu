new TypeIt("#LiuZhang", {
        loop: true,
        cursorSpeed: 1000,
        speed: 100
    })
    .type("刘子祎 && 张爽")
    .pause(2000)
    .delete(null, {
        delay: 500
    })
    .type("陪你度过漫长岁月...")
    .pause(2000)
    .delete(null, {
        delay: 500
    })
    .type("我很荣幸拥有最美丽的独一无二的女朋友😘")
    .pause(3000)
    .go();

new TypeIt('#talkTozhang', {
    lifeLike: true,
    cursorSpeed: 1000,
    waitUntilVisible: true,
    speed: 100
}).go();