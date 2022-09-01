const app = new Vue ({
    el: "#root",
    data: {
        mailRandom: [],
    },
    mounted() {
        for (let i = 0; i < 10; i++) {
            axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((res) => {
                    this.mailRandom.push(res.data.response);
                });
        }
    }
});