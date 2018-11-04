const express = require('express');

const crypto = require('crypto');

const router = express.Router();

const users = require('../../model/users');



router.post('/', (req, res) => {

    const user_id = req.body.user_id;

    const user_pw = req.body.user_pw;



    if (!(user_id && user_pw)) {

        res.json({

            error: {

                message: '올바른 ID 또는 PW가 아닙니다.',

            }

        });



        return;

    }



    const hashPassword = crypto.createHash('md5').update(user_pw).digest('hex');



    users.findOrCreate({

        where: {

            user_id: user_id

        },

        defaults: {

            user_id: user_id,

            user_pw: hashPassword

        }

    }).spread((user, created) => {

        if (created) {

            res.json({

                data: {

                    message: '성공적으로 가입되었습니다!'

                }

            })

        } else {

            res.json({

                error: {

                    message: '이미 존재하는 계정입니다!'

                }

            });

        }

    });

});

function register() {
    const id = document.querySelector('.id').value;
    const pw = document.querySelector('.pw').value;

    const data = {
        user_id: id,
        user_pw: pw
    };

    const request = new XMLHttpRequest();
    request.open('POST', '/api/auth/register', true);
    request.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    request.send(JSON.stringify(data));

    request.onload = function () {
        const response = JSON.parse(request.response);
        console.log(response);
    }

    if (response.hasOwnProperty('error')) {
        const message = response.error.message;
        alert(message);
    } else {
        const message = response.data.message;
        alert(message);
        location.href = '/login';
    }
}

module.exports = router;