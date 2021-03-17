function post(name, talk, result, call_miss) {
    $(function () {
        $.ajax({
            type: 'post',
            data: {
                name: name,
                talk: talk,
                result: result,
                call_miss: call_miss
            },
            url: 'post.php',
            success: function (data) {
                console.log(data);
            }
        });
    });
}

let name = window.prompt('Nama lengkap kamu siapa sih aku lupa?');
if (name.length !== 0) {
    if (name !== null) {
        alert('Ohhh iya aku baru inget nama kamu ' + name + ' kan!');
        let talk = window.confirm('Aku mau ngomong nih sama kamu. Boleh ya?');
        if (talk) {
            alert('Terimakasih ya udah mau bersedia mau ngomong sama aku');
            alert('Aku mau ngomongin sesuatu tentang perasaan yang aku pendam selama ini');
            alert('Okeh, langsung aja ke intinya ya');
            alert('Jujur, aku suka sama kamu ^_^');
            alert(name + '! Kamu gak kaget kan?');
            alert('Aku gak tau alesannya kenapa aku suka sama kamu');
            alert('Mungkin bener kata orang-orang');
            alert('Kalo cinta datang dari mata turun ke hati');
            alert('Aku bakal kecewa kalo kamu nolak aku');
            let result = window.confirm('Jadi, kamu mau gak jadi pacar aku?');
            if (result) {
                alert('Wahhh, ini bener kan kamu nerima aku');
                let call_miss = window.confirm('Thanks ya, sekarang aku boleh kan panggil kamu sayang?');
                if (call_miss) {
                    alert('Ok ' + name + ' sayang. See you');

                    post(name, 'Bersedia', 'Diterima', 'Boleh');
                } else {
                    alert('Okehh ga masalah, yang penting kamu dah jadi pacar aku. Love you beb');

                    post(name, 'Bersedia', 'Diterima', 'Gak boleh');
                }
            } else {
                alert('Ok fine, kamu nolak aku. Aku bakal kecewa sama kamu.');
                alert('Terserahhh...');

                post(name, 'Bersedia', 'Ditolak', 'null')
            }

        } else {
            alert('Yaudah, kalo kamu ga mau ngomong.');

            post(name, 'Gak mau', 'null', 'null')
        }
    }
} else {
    alert('Massa kamu ga punya nama sih');
    location.reload();
}
