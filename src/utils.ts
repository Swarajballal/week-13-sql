import { Client } from 'pg';

export async function getClient() {
    const client = new Client("postgres://vdtpuqeq:6a_N5HTHqp1Fn_Nd0_LrVsqxfY6VfWYb@rajje.db.elephantsql.com/vdtpuqeq");
    await client.connect();
    return client;
}