import { z } from 'zod';

const schema = z.string();

console.log(schema.parse('tuna'));
// 'tuna'

try {
  schema.parse(12);
} catch (e: any) {
  console.log('🟥', e.name);
  console.log('🟥', e.issues);
}

// "safe" parsing (doesn't throw error if validation fails)
console.log(schema.safeParse('tuna'));
// { success: true; data: "tuna" }

console.log(schema.safeParse(12));
// { success: false; error: ZodError }
