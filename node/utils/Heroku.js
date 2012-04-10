/**
 * The Heroku Module provides additional Heroku-centric settings 
 */

/*
 * 2012 Andy Rossmeissl (Brighter Planet)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

settings.dbSettings =  {
                        "user"    : url.parse(process.env.DATABASE_URL).auth.split(':')[0], 
                        "password": url.parse(process.env.DATABASE_URL).auth.split(':')[1], 
                        "host"    : url.parse(process.env.DATABASE_URL).hostname, 
                        "database": url.parse(process.env.DATABASE_URL).pathname.replace(/^\//, '')
                       }
