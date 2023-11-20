import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1700513362320 implements MigrationInterface {
    name = 'Init1700513362320'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."ido_status_enum" AS ENUM('pending', 'active', 'rejected')`);
        await queryRunner.query(`CREATE TABLE "ido" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP(0) NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP(0) NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP(0), "name" character varying NOT NULL, "description" character varying NOT NULL, "contractAddress" character varying, "chainId" character varying NOT NULL, "tokenAddress" character varying NOT NULL, "tokenPrice" integer NOT NULL, "softCap" integer NOT NULL, "hardCap" integer NOT NULL, "startDate" TIMESTAMP NOT NULL, "minContribution" integer NOT NULL, "maxContribution" integer NOT NULL, "investingPhaseInDays" integer NOT NULL, "vestingCliffInDays" integer NOT NULL, "vestingTotalPeriods" integer NOT NULL, "vestingPeriodInDays" integer NOT NULL, "status" "public"."ido_status_enum" NOT NULL, "txHash" character varying, "imageUrl" character varying, "url" character varying, "twitterUrl" character varying, "githubUrl" character varying, "telegramUrl" character varying, CONSTRAINT "PK_f34d659e92a3adc5328091df8b8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."user_authtype_enum" AS ENUM('email', 'apple', 'google', 'facebook')`);
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP(0) NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP(0) NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP(0), "name" character varying NOT NULL, "email" character varying NOT NULL, "verified" boolean NOT NULL DEFAULT false, "authType" "public"."user_authtype_enum" NOT NULL DEFAULT 'email', CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "spaceship" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP(0) NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP(0) NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP(0), "name" character varying NOT NULL, "fleet" character varying NOT NULL, "captainId" uuid, CONSTRAINT "REL_9402cc904dd12282fc9b444aec" UNIQUE ("captainId"), CONSTRAINT "PK_94ee6cf32be536f1af15ed80716" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "spaceship" ADD CONSTRAINT "FK_9402cc904dd12282fc9b444aece" FOREIGN KEY ("captainId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "spaceship" DROP CONSTRAINT "FK_9402cc904dd12282fc9b444aece"`);
        await queryRunner.query(`DROP TABLE "spaceship"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TYPE "public"."user_authtype_enum"`);
        await queryRunner.query(`DROP TABLE "ido"`);
        await queryRunner.query(`DROP TYPE "public"."ido_status_enum"`);
    }

}
