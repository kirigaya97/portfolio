import { describe, it, expect } from 'vitest';
import { contactSchema } from './schema';

const valid = {
  name: 'Ada Lovelace',
  email: 'ada@example.com',
  message: 'Hello, I have a project I would like to discuss with you.',
};

describe('contactSchema', () => {
  it('accepts a well-formed submission', () => {
    expect(contactSchema.safeParse(valid).success).toBe(true);
  });
  it('rejects a missing name', () => {
    expect(contactSchema.safeParse({ ...valid, name: '' }).success).toBe(false);
  });
  it('rejects an invalid email', () => {
    expect(contactSchema.safeParse({ ...valid, email: 'not-an-email' }).success).toBe(false);
  });
  it('rejects a too-short message', () => {
    expect(contactSchema.safeParse({ ...valid, message: 'hi' }).success).toBe(false);
  });
  it('accepts an optional honeypot value', () => {
    expect(contactSchema.safeParse({ ...valid, company: 'bot' }).success).toBe(true);
  });
});
