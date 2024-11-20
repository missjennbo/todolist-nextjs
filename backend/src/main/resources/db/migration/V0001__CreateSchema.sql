SET TIME ZONE 'Europe/Berlin';

CREATE TABLE IF NOT EXISTS public.TASK
(
    ID          BIGSERIAL PRIMARY KEY NOT NULL,
    USERID      BIGSERIAL             NOT NULL,
    DESCRIPTION VARCHAR               NOT NULL,
    DONE        BOOLEAN               NOT NULL
);

CREATE TABLE IF NOT EXISTS public.USERINFO
(
    ID    BIGSERIAL PRIMARY KEY NOT NULL,
    NAME  VARCHAR               NOT NULL,
    EMAIL VARCHAR               NOT NULL
);

INSERT INTO public.TASK(USERID, DESCRIPTION, DONE)
VALUES (1, 'I have to do something', false);

INSERT INTO public.USERINFO(NAME, EMAIL)
VALUES ('Max Mustermann', 'max.mustermann@example.com');

COMMIT;