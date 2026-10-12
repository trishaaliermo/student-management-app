'use server';

import { getConnection } from '@/lib/db';
import { redirect } from 'next/navigation';

export async function registerStudent(formData) {
  const first_name = formData.get('first_name');
  const last_name = formData.get('last_name');
  const email = formData.get('email');
  const phone = formData.get('phone');
  const street_address = formData.get('street_address');
  const city = formData.get('city');
  const province_state = formData.get('province_state');
  const country = formData.get('country');
  const postal_code = formData.get('postal_code');
  const program = formData.get('program');
  const year = formData.get('year');

  const db = await getConnection();
  await db.execute(
    `INSERT INTO students (first_name, last_name, email, phone, street_address, city, province_state, country, postal_code, program, year) 
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [first_name, last_name, email, phone, street_address, city, province_state, country, postal_code, program, year]
  );
  await db.end();

  redirect('/');
}