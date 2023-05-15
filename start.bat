@REM @echo off

@REM REM command 1
@REM npm i
@REM echo Install dependences

@REM REM command 2
@REM npm run build


@REM REM command 3
@REM IF EXIST out (
@REM     echo Build successed
@REM ) ELSE (
@REM     echo Build failed
@REM )

@echo off
REM Command 1
npm i

REM Command 2
npm run build

REM Command 3
IF EXIST out (
    echo Build successed
) ELSE (
    echo Build failed
)
