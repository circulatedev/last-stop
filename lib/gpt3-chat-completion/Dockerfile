FROM alpine as build
# install build tools
RUN apk add go git
RUN go env -w GOPROXY=direct
# cache dependencies
ADD go.mod go.sum ./
RUN go mod download 
# build
ADD . .
# RUN GOOS=linux GOARCH=amd64 CGO_ENABLED=0 go build -o main main.go
RUN go build -o /main
# copy artifacts to a clean image
FROM alpine
COPY --from=build /main /main
# ENTRYPOINT [ "/main" ]

# Adds Lambda Runtime Interface Emulator and use a script in the ENTRYPOINT for simpler local runs
# ADD https://github.com/aws/aws-lambda-runtime-interface-emulator/releases/latest/download/aws-lambda-rie /usr/bin/aws-lambda-rie
# RUN chmod 755 /usr/bin/aws-lambda-rie
RUN chmod 755 /main
# COPY entry.sh /
# RUN chmod 755 /entry.sh

ENTRYPOINT [ "/main" ]
# ENTRYPOINT [ "/main", "-arg1", "value1", "-arg2", "value2" ]