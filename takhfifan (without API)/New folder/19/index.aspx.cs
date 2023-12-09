using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.Service;

namespace _19
{
    public partial class index : System.Web.UI.Page
    {
        
        public class product
        {
            public int id;
            public string fname;
            public string category;
            public string comment;
            public string location;
            public int stock;
            public int sale;
            public int buy;
            public int price;
            public int discountPercent;
            public string pic;

            public product(int id, string fname, string category, string comment, string location, int stock, int sale,int buy, int price, int discountPercent, string pic)
            {
                this.id = id;
                this.fname = fname;
                this.category = category;
                this.comment = comment;
                this.location = location;
                this.stock = stock;
                this.sale = sale;
                this.buy = buy;
                this.price = price;
                this.discountPercent = discountPercent;
                this.pic = pic;
            }

        }

        public static List<product> getAll()
        {
            return products;
        }

        public static List<product> products = new List<product>();

        protected void Page_Load(object sender, EventArgs e)
        {
            products.Clear();

            products.Add(new product(1, "استخر یاس پاسداران", "تفریحی و ورزشی", " استخر و ورزش های آبی ", "پاسداران", 4.1, 334, 18319, 350000, 22, "01.png"));

        }
    }
}