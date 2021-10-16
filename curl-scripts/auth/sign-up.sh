# EMAIL=qwerty@asdf.com PASSWORD=zxcv sh curl-scripts/auth/sign-up.sh

curl "" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
      "credentials": {
          "email": "'"${EMAIL}"'",
          "password": "'"${PASSWORD}"'",
          "password_confirmation": "'"${PASSWORD}"'"
      }
    }'

echo
